const ListService = async (req, DataModel, searchArray) => {
  try {
    let pageNo = Number(req.params.pageNo);
    let perPage = Number(req.params.parPage);
    let searchKeyword = req.params.searchKeyword;
    let userEmail = req.headers["email"];
    let skipRow = (pageNo - 1) * perPage;
    let data;
    if (searchKeyword !== "0") {
      let SearchQuery = { $or: searchArray };
      data = await DataModel.aggregate([
        { $match: { userEmail: userEmail } },
        { $match: SearchQuery },
        {
          $facet: {
            Total: [{ $count: "count" }],
            Rows: [{ $skip: skipRow }, { $limit: perPage }],
          },
        },
      ]);
    } else {
      data = await DataModel.aggregate([
        { $match: { userEmail: userEmail } },
        {
          $facet: {
            Total: [{ $count: "count" }],
            Rows: [{ $skip: skipRow }, { $limit: perPage }],
          },
        },
      ]);
    }
    return { status: "success", data: data };
  } catch (error) {
    return { status: "fail", data: error.toString() };
  }
};
module.exports = ListService;
