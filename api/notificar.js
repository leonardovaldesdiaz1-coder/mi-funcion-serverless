export default function handler(request, response) {
    console.log("Vercel function invoked!");
    try {
        const { userId, username } = request.body;
        if (!userId || !username) {
            throw new Error("Missing userId or username");
        }
        const logMessage = `📬 [VERCEL] Simulating sending welcome email to user '${username}' (ID: ${userId})`;
        console.log(logMessage);
        response.status(200).json({ message: 'Notification processed successfully!' });
    } catch (error) {
        console.error("Error in Vercel function:", error);
        response.status(400).json({ error: error.message });
    }
}
