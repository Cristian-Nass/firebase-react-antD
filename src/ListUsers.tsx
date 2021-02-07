import React, {useEffect, useState} from "react";
import { db } from "./firebase";

export const ListOfUsers = () => {

	useEffect(() => {
        db.collection('users').get()
            .then(res => {
                res.docs.forEach(doc => {
                    console.log(doc.data());
                })
            })
	}, [])
	
  	return (
		<div>
            Hello
		</div>
  );
};