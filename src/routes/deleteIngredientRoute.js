export const deleteIngredientRoute = {
    path: "/ingredients/:name",
    method: "delete",
    handler: async(req, res) => {
        res.send("Deleting ingredient (not implemented yet)");
    }
}