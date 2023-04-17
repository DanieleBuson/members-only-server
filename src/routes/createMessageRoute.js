import { getGroup, addMessageToGroup, getMessagesForGroup } from "../db";
import * as admin from "firebase-admin";

export const createMessageRoute = {
    method:"post",
    path: "/groups/:id/messages",
    handler: async(req,res) => {
        const token = req.headers.authtoken;
        const { id } = req.params;
        const { text } = req.body;

        console.log("Dentro al Route, id: " + id)

        const user = await admin.auth().verifyIdToken(token);
        const group = await getGroup(id); 

        if (!user || !group.members.includes(user.user_id)){
            res.status(401).json({ message: "User not authorized to post messages" });
        }

        await addMessageToGroup(id, user.user_id, text);
        const updatedMessages = await getMessagesForGroup(id);

        console.log(updatedMessages)

        res.status(200).json(updatedMessages);
    }
}