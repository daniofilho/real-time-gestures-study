const track: ITrack = {
  name: 'Test track',
  coordinates: [
    {
      curvature: 0,
      distance: 5, // short section for start/finish
    },
    {
      curvature: 0,
      distance: 20,
    },
    {
      curvature: 1,
      distance: 100,
    },
    {
      curvature: 0,
      distance: 150,
    },
    {
      curvature: -1,
      distance: 200,
    },
    {
      curvature: 0,
      distance: 250,
    },
  ],
};

export default track;
