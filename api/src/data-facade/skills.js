const { db, withTransaction, sql } = require("../shared/db-connection");
const {
    get_skills_query,
} = require("../queries/skills");

const get_skills = async () => {
    const connection = await db();

    const result = await connection
        .timed_query(get_skills_query, "get_skills");

    return result.recordset;
};

module.exports = {
    get_skills,
}