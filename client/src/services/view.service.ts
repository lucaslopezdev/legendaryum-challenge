import serverApi from "@/api/server.api";

const viewService = {
  getViews () {
    return serverApi.get('/views')
  },

  getView (viewRoute: string) {
    return serverApi.get(`/views/${viewRoute}`);
  }
}

export default viewService;