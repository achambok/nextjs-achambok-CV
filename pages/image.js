import Image from 'next/image';

const myLoader = ({ src, width, quality }) => {
  return '/root/Downloads/${src}?w=${width}&q=${quality || 75}';
};

const MyImage = (props) => {
  return (
    <Image
      loader={myLoader}
      src="https://www.dropbox.com/s/46jaz4oc7m2kurs/2022-04-11%2013.56.17.jpg?dl=0"
      alt="Ashley Chamboko"
      width={500}
      height={500}
    />
  );
};
