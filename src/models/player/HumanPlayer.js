export default function HumanPlayer(args) {
  const name = args.name.length < 1 ? 'Human' : args.name;
  const isHuman = true;
  return {
    name,
    isHuman,
  };
}