import HardComputerPlayer from "./HardComputerPlayer";
import HumanPlayer from "./HumanPlayer"

const PlayerFactory = {
  createPlayer: (args) => {
    if('human' === args.type) {
      return new HumanPlayer({
        name: args.name,
      });
    }
    if('hard-ai' === args.type) {
      return new HardComputerPlayer({
        name: args.name,
      });
    }
  }
}

export default PlayerFactory;