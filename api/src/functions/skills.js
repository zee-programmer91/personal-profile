const { app } = require("@azure/functions");
const {
    get_skills,
} = require("../data-facade/skills");

const getSkills = async (request, context) => {
    try {
        const skills = await get_skills();
        const results = {message: "Success"}
        return { status: 200, jsonBody: results };
    } catch (error) {
        return { status: 500, jsonBody: error };
    }
};

app.http("get-skills", {
    methods: ["GET", "POST"],
    authLevel: "anonymous",
    handler: (request, context) => {
            const methods = {
                GET: getSkills(request, context),
            }
        return methods[request.method](request, context);
        }
});