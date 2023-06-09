import { acceptRequest, getRequestsForGroup, getGroup } from "../db";
import * as admin from "firebase-admin";

export const acceptRequestRoute = {
    method:"post",
    path: "/groups/:groupId/requests/:requestId/accept",
    handler: async(req,res) => {
        const token = req.headers.authtoken;
        const { groupId, requestId} = req.params;

        const group = await getGroup(groupId);
        const user = await admin.auth().verifyIdToken(token);

        if (!user || group.ownerId !== user.user_id){
            res.status(401).json({ message: "User is not owner of group" });
        }

        await acceptRequest(requestId);
        const updatedRequests = await getRequestsForGroup(groupId);

        res.status(200).json(updatedRequests);
    }
}