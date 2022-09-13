const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const galleryContainerRef = document.querySelector('ul.gallery');

const makeImageEl = ({url, alt}) => {
  const liEl = document.createElement('li');
  const imgEl = document.createElement('img');
  imgEl.src = url;
  imgEl.alt = alt;
  liEl.insertAdjacentHTML('afterbegin', imgEl.outerHTML)

  return liEl.outerHTML;
}

const imageElements = images.map(makeImageEl);
galleryContainerRef.insertAdjacentHTML('afterbegin', imageElements.join(''));
