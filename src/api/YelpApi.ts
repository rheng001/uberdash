export const doBusinessSearch = async ({queryKey}: any) => {
  const response = await fetch(
    `https://api.yelp.com/v3/businesses/search?term=${queryKey[1]}&location=Paramount`,
    {
      headers: {
        Authorization:
          'Bearer XfyfokyHloAHAejCWImwTK7K7Q_S_CADJdDHynPRM5JKPRBL8NoZpOMit4CssPdKC00bX_KpekcCXKJUWIJRilb5hvlXJwlKsWTjCe-vF9r-PvOBT9DdtjgpUfBLYnYx',
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
        Authorization:
          'Bearer XfyfokyHloAHAejCWImwTK7K7Q_S_CADJdDHynPRM5JKPRBL8NoZpOMit4CssPdKC00bX_KpekcCXKJUWIJRilb5hvlXJwlKsWTjCe-vF9r-PvOBT9DdtjgpUfBLYnYx',
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
    `https://api.yelp.com/v3/businesses/search?&attributes=hot_and_new&location=Paramount`,
    {
      headers: {
        Authorization:
          'Bearer XfyfokyHloAHAejCWImwTK7K7Q_S_CADJdDHynPRM5JKPRBL8NoZpOMit4CssPdKC00bX_KpekcCXKJUWIJRilb5hvlXJwlKsWTjCe-vF9r-PvOBT9DdtjgpUfBLYnYx',
      },
    },
  );

  if (!response.ok) {
    throw new Error('Something went wrong');
  }

  return response.json();
};
