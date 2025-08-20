import axios from "axios";
import { useSelector } from "react-redux";
function useAPIs() {
  const { user } = useSelector((state) => state.Auth);
  const userId = user._id;

  return {
    fetchTotalArticles: async () => {
      try {
        const res = await axios.get(`api/total/articles/${userId}`);
        return res?.data?.total ?? 0;
      } catch (error) {
        console.error("Error fetching total articles:", error);
        return 0;
      }
    },

    fetchTotalVideos: async () => {
      try {
        const res = await axios.get(`api/total/videos/${userId}`);
        return res?.data?.total ?? 0;
      } catch (error) {
        console.error("Error fetching total videos:", error);
        return 0;
      }
    },

    // fetchTotalComments: async () => {
    //   try {
    //     const res = await axios.get(`api/comments/total/${userId}`);
    //     return res?.data?.total ?? 0;
    //   } catch (error) {
    //     console.error("Error fetching total comments:", error);
    //     return 0;
    //   }
    // },

    // fetchFollowersCount: async () => {
    //   try {
    //     const res = await axios.get(`api/followers/count/${userId}`);
    //     return res?.data?.total ?? 0;
    //   } catch (error) {
    //     console.error("Error fetching followers count:", error);
    //     return 0;
    //   }
    // },

    // fetchFollowingCount: async () => {
    //   try {
    //     const res = await axios.get(`api/following/count/${userId}`);
    //     return res?.data?.total ?? 0;
    //   } catch (error) {
    //     console.error("Error fetching following count:", error);
    //     return 0;
    //   }
    // },

    // fetchTotalViews: async () => {
    //   try {
    //     const res = await axios.get(`api/views/total/${userId}`);
    //     return res?.data?.total ?? 0;
    //   } catch (error) {
    //     console.error("Error fetching total views:", error);
    //     return 0;
    //   }
    // },

    // fetchTotalOpinions: async () => {
    //   try {
    //     const res = await axios.get(`api/opinions/total/${userId}`);
    //     return res?.data?.total ?? 0;
    //   } catch (error) {
    //     console.error("Error fetching total opinions:", error);
    //     return 0;
    //   }
    // },
  };
}

export default useAPIs;
