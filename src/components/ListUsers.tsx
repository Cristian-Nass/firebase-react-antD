import React, {useEffect, useState} from "react";
import {useCollection} from "react-firebase-hooks/firestore";
import Table, {ColumnsType} from "antd/lib/table";
import {db} from "../firebase";
import {SortableContainer, SortableElement, SortableHandle} from "react-sortable-hoc";
import {MenuOutlined} from "@ant-design/icons/lib";
import arrayMove from 'array-move';


export interface UsersModel {
  firstName: string;
  lastName: string;
  email: string;
  id: string;
}
const DragHandle = SortableHandle(() => (
  <MenuOutlined style={{ cursor: 'pointer', color: '#999' }} />
));

const columns: ColumnsType<UsersModel> = [
  {
    title: "",
    width: 20,
    dataIndex: "drag-handle",
    render: () => <DragHandle />,
    className: 'drag-visible',
  },

  {
    title: "First Name",
    dataIndex: "firstName",
    key: "id",
  },
  {
    title: "Last Name",
    dataIndex: "lastName",
    key: "id",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "id",
  }
];

const CSortableItem = SortableElement((props: any) => {
  return <tr {...props} />;
});
const CSortableContainer = SortableContainer((props: any) => <tbody {...props} />);


export const ListOfUsers = () => {

	const [querySnapshot, loading] = useCollection(
    db.collection("users"),
    {
      snapshotListenOptions: {includeMetadataChanges: true}
    }
  );


  const [dataSource, setDataSource] = useState<UsersModel[]>([]);

  useEffect(() => {
    if(!loading) {
      const options = querySnapshot?.docs?.map((doc: any) => {
        const user = {...doc.data(), id: doc.id};
        return user as UsersModel;
      });
      setDataSource(options);
    }
  }, [querySnapshot, loading]);
	
  // @ts-ignore
  const DraggableBodyRow = ({ className, style, ...restProps }) => {
    const index = dataSource.findIndex((x) => x.id === restProps['data-row-key']);
    return <CSortableItem index={index} {...restProps} />;
  };


  // @ts-ignore
  const onSortEnd = ({ oldIndex, newIndex}) => {
    if (oldIndex !== newIndex) {

      // @ts-ignore
      const newData: Industry[] = arrayMove([].concat(dataSource), oldIndex, newIndex).filter(el => !!el);
      const newSortedData = newData.map((data, index) => ({...data, sortOrder : index}))
      setDataSource(newSortedData);
      // FirebaseWrapper.saveIndustry(newSortedData);
    }
  };

  const DraggableContainer = (props: any) => (
    <CSortableContainer
      useDragHandle
      helperClass="row-dragging"
      onSortEnd={onSortEnd}
      {...props}
    />
  );

  

	return (
		<div>
			<Table<UsersModel>
        loading={loading}
        pagination={false}
        rowKey={"id"}
        dataSource={dataSource}
        columns={columns}
        components={{
          body: {
            wrapper: DraggableContainer,
            row: DraggableBodyRow,
          },
        }}

      />
		</div>
  );
};