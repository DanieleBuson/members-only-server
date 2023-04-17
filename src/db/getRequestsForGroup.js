import { db } from "./db";
import { getUser } from "./getUser";

export const getRequestsForGroup = async(groupId) => {
    const connection = db.getConnection();
    const requests = await connection.collection("requests")
        .find({ groupId})
        .toArray();
    const usersFroRequests = await Promise.all(
        requests.map(request => getUser(request.userId))
    );
    const populatedRequests = requests.map((request,i) => ({
        ...request,
        userName: usersFroRequests[i].fullName,
    }));
    return populatedRequests;
}