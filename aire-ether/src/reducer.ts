
interface Props {
  state: any;
  action: any;
}

export default function reducer({ state, action }: Props) {
  switch(action.type) {
    case "POST_AIRE":
      return {
        ...state,
        aireFeed: [...new Set([...state.airFeed, ...action.payload])]
      };
    case "DELETE_AIRE": 
      const newAireFeed = state.airFeed.filter(id => id !==action.payload.id)
      return {
        airFeed: newAireFeed
      };
    default:
      return state
  }
}