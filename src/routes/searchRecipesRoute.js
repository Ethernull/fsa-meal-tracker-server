export const searchRecipesRoute = {
    path: "/recipes",
    method: "get",
    handler: async(req, res) => {
        res.send("Searching recipes (not implemented yet)");
    }
}