import { createImgUrl } from '../src/utils/createImgUrl';

describe('createImgUrl', () => {
  const projectId = 'your-project-id';
  const dataset = 'your-dataset';

  it('should generate image URL with asset', () => {
    const imageUrl = createImgUrl(projectId, dataset)?.getImgUrl(
      'image-94ae271bfb22020e0003c4e2990f02f6e20c95f4-812x127-png'
    );
    const expectedUrl = `https://cdn.sanity.io/images/${projectId}/${dataset}/94ae271bfb22020e0003c4e2990f02f6e20c95f4-812x127.png?fit=max&auto=format`;

    expect(imageUrl).toBe(expectedUrl);
  });

  it('should generate image URL without asset', () => {
    const imageUrl = createImgUrl(projectId, dataset)?.getImgUrl();

    expect(imageUrl).toBeUndefined();
  });
});
