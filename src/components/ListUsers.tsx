import React, {useEffect, useState} from "react";
import {useCollection} from "react-firebase-hooks/firestore";
import Table, { ColumnsType } from "antd/lib/table";

import { db } from "../firebase";

export interface UsersModel {
  firstName: string;
  lastName: string;
  email: string;
}


export const ListOfUsers = () => {

	const [querySnapshot, loading] = useCollection(
    db.collection("users"),
    {
      snapshotListenOptions: {includeMetadataChanges: true}
    }
  );


	// const getUsers = () => {
	// 	db.collection('users').get()
	// 	.then(res => {
	// 		res.docs.forEach(doc => {
	// 			console.log(doc.data());
	// 		})
	// 	})
	// }

	// useEffect(() => {
	// 	getUsers();
	// }, [])

	const columns: ColumnsType<UsersModel> = [
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

	return (
		<div>
			<Table<UsersModel>
        loading={loading}
        rowKey={"id"}
        dataSource={querySnapshot?.docs?.map((doc: any) => {
          const emailTemplate = {...doc.data(), id: doc.id};
          return emailTemplate as UsersModel;
        })}
        columns={columns}
      />
		</div>
  );
};