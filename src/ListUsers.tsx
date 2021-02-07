import React, {useEffect, useState} from "react";
import { db } from "./firebase";

export const ListOfUsers = () => {

	const getUsers = () => {
		db.collection('users').get()
		.then(res => {
			res.docs.forEach(doc => {
				console.log(doc.data());
			})
		})
	}

	useEffect(() => {
		getUsers();
	}, [])
	
	return (
		<div>
			Hello
		</div>
  );
};