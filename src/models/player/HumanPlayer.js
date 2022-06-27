export default function HumanPlayer(args) {
  const name = args['name'] ?? 'Player';
  const isHuman = true;
  return {
    name,
    isHuman,
  };
}