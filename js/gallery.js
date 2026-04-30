const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesFragment = document.createDocumentFragment();

const getNodeElement = (block, element) => block.querySelector(`.picture__${element}`);

const renderGalley = (data) => {
  data.forEach(({url, description, likes, comments}) => {
    const newItem = pictureTemplate.cloneNode(true);
    const imgNode = getNodeElement(newItem, 'img');
    const likesNode = getNodeElement(newItem, 'likes');
    const commentsNode = getNodeElement(newItem, 'comments');

    imgNode.src = url;
    imgNode.alt = description;
    likesNode.textContent = likes;
    commentsNode.textContent = comments.length;

    picturesFragment.append(newItem);
  });

  picturesContainer.append(picturesFragment);
};

export { renderGalley };
