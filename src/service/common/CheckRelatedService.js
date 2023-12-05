const CheckRelatedService = async (queryObject, RelatedModel) => {
  try {
    let data = await RelatedModel.aggregate([{ $match: queryObject }]);
    return data.length > 0;
  } catch (error) {
    return false;
  }
};

module.exports = CheckRelatedService;
