import {  KeyboardEvent, useState } from "react";

export interface IcommentsList {
    key: number,
    user: string;
    comment: string;
}

const CommentsList = () => {
    const [commentsList, setCommentList] = useState<IcommentsList[]>([
        {
            key: 0,
            user: "Lucas Credie",
            comment: "dolor sit amet, consectetur adipiscing elit. Mi enim ut eu cras ultrices eget et tristique proin. Mi enim ut eu cras ultrices eget et tristique proin.",
        }
    ]);

    const [inputText, setInputText] = useState("");

    const handleKeyUp = (e: KeyboardEvent) => {
        if (e.code === "Enter" && inputText !== "") {
            handleAddComment();
        }
    };

    const handleAddComment = () => {
        if (inputText !== "") {
            let newCommentsList = [...commentsList];
            newCommentsList.push({
                key: commentsList.length + 1,
                user: "Comment",
                comment: inputText,
            });
            setCommentList(newCommentsList);
            setInputText("");
        }
    };

    return (
        <></>
    );
};

export default CommentsList;