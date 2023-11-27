const createImgUrl = (projectId: string, dataset: string) => {
  const getImgUrl = (assetId?: string) => {
    const imageId = assetId && assetId.substring(assetId.indexOf('-') + 1);
    const imageSplitId = imageId && imageId.split('-');
    const imageUid = imageSplitId && imageSplitId[0];
    const imageSize = imageSplitId && imageSplitId[1];
    const imageGetExt = imageSplitId && imageSplitId[2];
    const imageUrl = `https://cdn.sanity.io/images/${projectId}/${dataset}/${imageUid}-${imageSize}.${imageGetExt}?fit=max&auto=format`;
    return assetId ? imageUrl : undefined;
  };
  return {
    getImgUrl
  };
};

export default createImgUrl;
