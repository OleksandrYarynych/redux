import users from "./users";

import newCar from "./dataImg/newCar.jpg";
import GibersPostPhoto from "./dataImg/GibersPostPhoto.jpg";

const defaultPosts = [
  {
    id: 1,
    user: users[0],
    description: "my new car",
    date: "Wed Feb 21, 2016",
    postPhoto: newCar,
    likesInfo: {
      likes: 698,
      isLiked: false,
    },
    savesInfo: {
      saves: 892,
      isSaved: false,
    },
    repostsInfo: {
      reposts: 715,
      isReposted: false,
    },
  },
  {
    id: 2,
    user: users[1],
    description: "i am on fire",
    date: "Mon Feb 29, 2020",
    postPhoto: GibersPostPhoto,
    likesInfo: {
      likes: 965,
      isLiked: false,
    },
    savesInfo: {
      saves: 350,
      isSaved: false,
    },
    repostsInfo: {
      reposts: 620,
      isReposted: false,
    },
  },
];

export default defaultPosts;
