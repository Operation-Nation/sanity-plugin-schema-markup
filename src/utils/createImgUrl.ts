const createImgUrl = (projectId: string, dataset: string) => {
  const getImgUrl = (asset?: string) => {
    const imageId = asset && asset.substring(asset.indexOf('-') + 1)
    const imageSplitId = imageId && imageId.split('-')
    const imageUid = imageSplitId && imageSplitId[0]
    const imageSize = imageSplitId && imageSplitId[1]
    const imageGetExt = imageSplitId && imageSplitId[2]
    const imageUrl = `https://cdn.sanity.io/images/${projectId}/${dataset}/${imageUid}-${imageSize}.${imageGetExt}?fit=max&auto=format`
    return imageUrl
  }
  return {
    getImgUrl,
  }
}

export default createImgUrl
