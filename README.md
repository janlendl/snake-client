# Snake Client Project

Snake game is a very popular video game. It is a video game concept where the player maneuvers a dot and grows it by ‘eating’ pieces of food. As it moves and eats, it grows and the growing snake becomes an obstacle to smooth maneuvers. The goal is to grow it to become as big as possible without bumping into the side walls, or bumping into itself, upon which it dies.

This is simply a multiplayer take on the genre.

## Credit
Our server code for this game was not written from scratch! It is a heavily modified version of the single player game snake created by [Tania Rascia](https://github.com/taniarascia).

The demonstration GIF below is taken from the single-player version. It gives us a general idea of the gameplay and style, but ours is a heavily modified multi-player version of the game.

![From the original snake game](https://d.pr/i/AqytNj+)

#

Before you can run this client, you will need to be running the server side and you you need to install it from [here](https://github.com/lighthouse-labs/snek-multiplayer).

## Final Product

!["main screen"](images/snekPic.png)
!["with messages"](images/snekPic2.png)


## Getting Started

- Follow steps inside the snek server repo to run the server side
- Run the development snake client using the `node play.js` command.

## Playing the Game
- Use the keys 'W' 'A' 'S' 'D' to be able to move around the game
- To send a canned message use the following hot keys:
  - 1: Hi
  - 2: Game on!
  - 3: GLHF! (Good Luck Have Fun!)
  - 4: GG! (Good Game!)
  - 5: GGWP! (Good Game Well Played!)

## Terminating the game
- The game will end if you hit the wall
- You can also terminate the game but pressing ```ctrl+c``` on your keyboard