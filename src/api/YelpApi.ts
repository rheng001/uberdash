import Config from 'react-native-config';

export const doBusinessSearch = async ({queryKey}: any) => {
  const response = await fetch(
    `https://api.yelp.com/v3/businesses/search?term=${queryKey[1]}&location=Paramount`,
    {
      headers: {
        Authorization: `Bearer ${Config.YELP_API_KEY}`,
      },
    },
  );

  if (!response.ok) {
    throw new Error('Something went wrong');
  }

  return response.json();
};

export const getBusiness = async ({queryKey}: any) => {
  const response = await fetch(
    `https://api.yelp.com/v3/businesses/${queryKey[1]}`,
    {
      headers: {
        Authorization: `Bearer ${Config.YELP_API_KEY}`,
      },
    },
  );

  if (!response.ok) {
    throw new Error('Something went wrong');
  }

  return response.json();
};

export const getPopular = async ({queryKey}: any) => {
  const response = await fetch(
    `https://api.yelp.com/v3/businesses/search?&attributes=hot_and_new&location=${queryKey[1]}`,
    {
      headers: {
        Authorization: `Bearer ${Config.YELP_API_KEY}`,
      },
    },
  );

  if (!response.ok) {
    throw new Error('Something went wrong');
  }

  return response.json();
};
