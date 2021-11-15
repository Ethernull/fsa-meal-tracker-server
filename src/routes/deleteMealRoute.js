export const deleteMealRoute = {
    path: "/meals/:id",
    method: "delete",
    handler: async(req, res) => {
        res.send("Deleting meal (not implemented yet)");
    }
}