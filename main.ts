controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . b b b b . . . . . . . . 
        . . . b 3 3 3 3 b b b b . . . . 
        . . b b 3 3 3 3 3 1 1 b b c c . 
        . . b 1 1 3 3 3 3 3 1 1 b b c c 
        . . b 1 1 3 3 3 3 3 b b b b b c 
        . . c 3 3 3 3 3 3 3 b b b b b f 
        . c b 3 3 3 3 3 3 b b b b b b f 
        c b b b 3 3 3 b b b b b b b b f 
        c b b b b b b b b b b b b b c . 
        f b b b b 1 1 b b b b b b c c . 
        f b b b b 1 1 b b b b b c d f . 
        f b b b b b b b b b c c d d f . 
        f f b b b b b b c c d d d c . . 
        . f f f c c c c d d d d c . . . 
        . . . . b b b b f c c c f . . . 
        . . . . . . . f f d d d f . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . b b b b . . . . . . . . 
        . . . b 3 3 3 3 b b b b . . . . 
        . . b b 1 3 3 3 3 1 1 1 b c c . 
        . . b 1 1 3 3 3 3 3 1 1 b b b c 
        . . b 1 1 3 3 3 3 3 b b b b b c 
        . . c 3 3 3 3 3 3 b b b b b b f 
        . c b b 3 3 3 3 3 b b b b b b f 
        c b b b 3 3 3 b b b b b b b b f 
        c b b b b 1 1 b b b b b b b c . 
        f b b b b 1 1 b b b b b b c c . 
        f b b b b 3 3 b b b b c c d f . 
        f c b b b b b b b c c d d d f . 
        f f c b b b b c c d d d d c . . 
        . f f f c c c c d d d d c . . . 
        . . . . . . b b f c c c . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . b b b b . . . . . . . . 
        . . . b 3 3 3 3 b b b b . . . . 
        . . b b 3 3 3 3 3 1 1 b b c c . 
        . . b 1 1 3 3 3 3 3 1 1 b b c c 
        . . b 1 1 3 3 3 3 3 b b b b b c 
        . . c 3 3 3 3 3 3 3 b b b b b f 
        . c b 3 3 3 3 3 3 b b b b b b f 
        c b b b 3 3 3 b b b b b b b b f 
        c b b b b b b b b b b b b b c . 
        f b b b b 1 1 b b b b b b c c . 
        f b b b b 1 1 b b b b b c d f . 
        f b b b b b b b b b c c d d f . 
        f f b b b b b b c c d d d c . . 
        . f f f c c c c d d d d c f . . 
        . . . . f b b b f c c c f f . . 
        `,img`
        . . . . b b b b . . . . . . . . 
        . . . b 3 3 3 3 b b b b . . . . 
        . . b b 3 3 3 3 3 1 1 b c c c . 
        . . b 1 3 3 3 3 3 1 1 1 b c c c 
        . . b 1 1 3 3 3 3 3 b b b b c c 
        . . c 1 1 3 3 3 3 3 b b b b b f 
        . c c 3 3 3 3 3 3 3 b b b b b f 
        c c b 3 3 3 3 3 b b b b b b b f 
        c b b b b b b b b b b b b b c . 
        f b b b b 3 3 b b b b b b b c . 
        f b b b b 1 1 b b b b b b c f . 
        f b b b b 1 1 b b b b c c d f . 
        f f b b b b b b b c c d d c . . 
        . f f f c c c c c d d d c f . . 
        . . f f b b f c f c c c b f f . 
        . . f b b b f . . f b d d d f . 
        `],
    100,
    true
    )
})
function Level2 () {
    tiles.setTilemap(tilemap`level11`)
    myEnemy = sprites.create(img`
        . . f f f . . . . . . . . f f f 
        . f f c c . . . . . . f c b b c 
        f f c c . . . . . . f c b b c . 
        f c f c . . . . . . f b c c c . 
        f f f c c . c c . f c b b c c . 
        f f c 3 c c 3 c c f b c b b c . 
        f f b 3 b c 3 b c f b c c b c . 
        . c b b b b b b c b b c c c . . 
        . c 1 b b b 1 b b c c c c . . . 
        c b b b b b b b b b c c . . . . 
        c b c b b b c b b b b f . . . . 
        f b 1 f f f 1 b b b b f c . . . 
        f b b b b b b b b b b f c c . . 
        . f b b b b b b b b c f . . . . 
        . . f b b b b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        `, SpriteKind.Enemy)
    myEnemy.follow(mySprite, 20)
    myEnemy.setPosition(147, 10)
    animation.runImageAnimation(
    myEnemy,
    [img`
        . . f f f . . . . . . . . f f f 
        . f f c c . . . . . . f c b b c 
        f f c c . . . . . . f c b b c . 
        f c f c . . . . . . f b c c c . 
        f f f c c . c c . f c b b c c . 
        f f c 3 c c 3 c c f b c b b c . 
        f f b 3 b c 3 b c f b c c b c . 
        . c b b b b b b c b b c c c . . 
        . c 1 b b b 1 b b c c c c . . . 
        c b b b b b b b b b c c . . . . 
        c b c b b b c b b b b f . . . . 
        f b 1 f f f 1 b b b b f c . . . 
        f b b b b b b b b b b f c c . . 
        . f b b b b b b b b c f . . . . 
        . . f b b b b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        `,img`
        . . f f f . . . . . . . . . . . 
        f f f c c . . . . . . . . f f f 
        f f c c . . c c . . . f c b b c 
        f f c 3 c c 3 c c f f b b b c . 
        f f b 3 b c 3 b c f b b c c c . 
        . c b b b b b b c f b c b c c . 
        . c b b b b b b c b b c b b c . 
        c b 1 b b b 1 b b b c c c b c . 
        c b b b b b b b b c c c c c . . 
        f b c b b b c b b b b f c . . . 
        f b 1 f f f 1 b b b b f c c . . 
        . f b b b b b b b b c f . . . . 
        . . f b b b b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . c c . . c c . . . . . . . . 
        . . c 3 c c 3 c c c . . . . . . 
        . c b 3 b c 3 b c c c . . . . . 
        . c b b b b b b b b f f . . . . 
        c c b b b b b b b b f f . . . . 
        c b 1 b b b 1 b b c f f f . . . 
        c b b b b b b b b f f f f . . . 
        f b c b b b c b c c b b b . . . 
        f b 1 f f f 1 b f c c c c . . . 
        . f b b b b b b f b b c c . . . 
        c c f b b b b b c c b b c . . . 
        c c c f f f f f f c c b b c . . 
        . c c c . . . . . . c c c c c . 
        . . c c c . . . . . . . c c c c 
        . . . . . . . . . . . . . . . . 
        `,img`
        . f f f . . . . . . . . f f f . 
        f f c . . . . . . . f c b b c . 
        f c c . . . . . . f c b b c . . 
        c f . . . . . . . f b c c c . . 
        c f f . . . . . f f b b c c . . 
        f f f c c . c c f b c b b c . . 
        f f f c c c c c f b c c b c . . 
        . f c 3 c c 3 b c b c c c . . . 
        . c b 3 b c 3 b b c c c c . . . 
        c c b b b b b b b b c c . . . . 
        c b 1 b b b 1 b b b b f c . . . 
        f b b b b b b b b b b f c c . . 
        f b c b b b c b b b b f . . . . 
        . f 1 f f f 1 b b b c f . . . . 
        . . f b b b b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        `],
    200,
    true
    )
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -250
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    game.over(false)
})
function Level3 () {
    tiles.setTilemap(tilemap`level12`)
    mySprite.setPosition(46, 70)
    myenemy1 = sprites.create(img`
        ........................bbbbbbbbbbbbbbbbbbb..................................
        ......................bbb5555555555555555bbbbb...............................
        .....................bb5555555555555555555555bbb......bbc....................
        ....................bb5555555555555555555555555bbb..cbbcc....................
        ...................bb5555555555555555555555555555bccbbccc....................
        ...................b5555555555555555555555555555555ccccc.....................
        ..................bb555b555555555bd55555555555555555cccc.....................
        ..................b5555b555555555bb555555555555555555ccc.....................
        ..................c555555555555555555555555bccc5555555cc.....ccc.............
        ..................c55555bccccc5555555555555ccc1c5555555ccccccbbc.............
        ..................c5555bccccccccb5555555555dcbbc55555555cccbbbcc.............
        ..................c555bddcccccccccb1555555555555555555555ccbccc..............
        ..................c555bcdcccccccccc11b55555555555555555555ccccc..............
        ...................c55ccbcccccccccc11cc5555555555555555555dcccc..............
        ...................c55ccccccccccccc1bccb1555555bb5555555555dcc...............
        ....................c5cccccccccccccccccb1155555b55555555555dcc...............
        ....................c55ccccccccccccccccc1bccccb555555555555ddc...............
        .....................c55cccccccccccccccccccccc555555555555dddccccbbc.........
        ......................c55ccccccb333cc333bcccc555555555555555ddccbbcc.........
        ......................cc55dccc3333bc333333ccb555555555555555ddcccccc.........
        .......................cc555c33333b3333333cc555555555555555dddccccc..........
        ........................ccb533333b33333333c5555555555555555d55dcccc..........
        .........................cb533333b3333333b55d55555555555555555dcccc..........
        .........................cd533333b33b133b55dd5555555555555555dddccc..........
        .................cccc....c5513333333b11355dd55555555555555ddddddcc...........
        ................c55bcc...c5513333333b1155dd5555555555555555dddddcc...........
        ................c55bbc...c5533333333b555dd55555555555555555ddddddccc.........
        ..............ccc55bddc..cb553133133555dd555555555cccc5555dddddddcccccc......
        .............c55bb5bdddc..c55513313555dd5555555555c55ccccddddddddcccccc......
        .............c55dbbbdddcc..cd5555555dbdd5555555555cb5555ccccdddddccccc.......
        .............c555bddbbb5c..cbbbbbbbbbddd5555555ccccbb55bb5dbcddddbccc........
        ..............bbbbddb555ccccddbbbbbddddd5555555c55ccbbbb5555bcddddcc.........
        .............cdd555b555bdbb5dddddddddddd5555555bb5555db5555555cdddc..........
        ...........ccbbb555bbbb5dbb5ddddddddddd555555555bb55ddbccbb555ccddcc.........
        ...........c555bb5555555bb555dddddddddd5555555555bc5ddddddbb555cdddcc........
        ...........c5555b5555555b5555ddddddddd555555555555c55dddbbbb555cbdddc........
        ............cbbb555555dbb555555dddddd5555555555555cc5ddbb5555555bbbddc.......
        .............cbb55555ddb555555555555555555555555555c55db55555555dbbbdcc......
        ..............cccddddddb555555555555555555555555555cc555bbb555555dddddc......
        ................ccddddb55555555555555555555555555555c55555dd555555ddddc......
        .................cddddb5555555555555555555555555555dcc5555dd5555555dddc......
        ..cc.............ccddbd555555555555555555555555555d5dc555dd55555555dddc......
        ..c5bb............ccdbd5555555555555555555555555555ddcc555555555555dddc......
        ..c55b.............ccbd555555555555555555555555555ddddc555555555555ddcc......
        ..cb5bb.............cbdd5555555555555555555555555d5dddcc5555555555dddcc......
        ..cb55b..............cdd555555555555555555555555d55ddddccc5555555dddcc.......
        ..cb55b..............cddd555555555555555555d555d55dddddddccc555ddddcc........
        ..c555b..............cdd55555dd555555555555555dddddddddddddcccccccccc........
        .cb555bb.............cbdd5555dd5555555555555dddddddddddddddddddddddccc.......
        .cb555bb............ccbddd5d55555555dd55555555dddddddddddddddddddddcccc......
        .c55555b...........cccbbddddddd555555555ddd55dddddddddddddddddddddbccc.......
        cb55555b..........cccbbbbdddd55ddd5555ddddddddddddddddddddddddddddbcc........
        cb55555b........bccbbbd5555dd555dd5555d55ddddddddddddddddd55ddddbbbc.........
        c5555555bb....bbbddbb5555555ddddddddddd55dddddddddddddddd55ddddddbbc.........
        c55555555bbbbbbddddc555555555dddddddddddddddddddddddddddd5dd5555ddbc.........
        cd5555555555ddddddc5555555555ddddddddddddddddddddddddddddd55555555dc.........
        cd5555555555dddddcc5555555555dddddddddddddddddddddddddd55d555555555cc........
        cdd55555555ddddddc55555555555dddddddddddddddddddddddddd5555555555555c........
        cddd555555ddddddcc5555555555ddddddddddddddddddddddddddddd55555555555cc.......
        ccddddddddddddddc55555555555ddddddddddddddddddddddddddddd555555555555c.......
        .cddddddddddddddc555555555555dddddddddddddddddddddddddddd555555555555c.......
        .ccddddddddddddcc555555555555ddddddddddddddddddbddddddddd555555555555cc......
        ..ccdddddddddddcc5555555dd55dddddddddddddddddddbdddddddd5d555555555555c......
        ...ccddddddddddccd5555dddddddddddddbbddddddddddbddddddddd5555555555555c......
        ....cccddddddddcddddddddddddddddddbbddddddddddbbbdddddddddd55555555555c......
        ......cccdddddccdddddddddddddddddccccccccccccbbbbddddddddddd555555555dc......
        ........cccccccdddddddddddddddddccc........ccccbbbdddddddddddd5555555dcc.....
        ............ccc555555dddddddddccc.............cccbddddddddddddd55555ddccc....
        .............c55555555ddddddccc..................ccdddddddddddddddddddccc....
        ...........ccdddccd555dddccccc....................ccdddddddddddd5555555dc....
        ..........ccdddccdddddcddcc........................cccddddddddd55555555dcc...
        ..........ccdddcdddccccddc...........................ccccccdddd555ddddccddcc.
        ..........ccccccddcccccdcc...............................ccddddddccddddccddcc
        ...............cdc.....ccc................................cccccdddccddddcddcc
        ...............cc...........................................ccccdddccccdccccc
        ...............................................................ccccc..ccc....
        `, SpriteKind.Enemy)
    myenemy1.follow(mySprite, 20)
    myEnemy.setPosition(147, 10)
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . b b b b . . . . 
        . . . . b b b b 3 3 3 3 b . . . 
        . c c b b 1 1 3 3 3 3 3 b b . . 
        c c b 3 1 1 3 3 3 3 3 1 1 b . . 
        c b 3 3 3 3 3 3 3 3 3 1 1 b . . 
        f b b c c c c b 3 3 3 3 3 c . . 
        f b c c c d d d b b 3 3 3 3 c . 
        f b c b d d d d d d b b 3 3 b c 
        . c b d c d d d d d d b c 3 3 c 
        . c d d c d d d c d d c c c 3 f 
        . f d d d d d c d d d c c c b f 
        . f d b b b d d b f f c c c b f 
        . . c d d d d b d d b f b b f f 
        . . . c d d d b b d d f f f f . 
        . . . f f b b f b b b b . . . . 
        . . . f b b b f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . b b b b . . . . 
        . . . . b b b b 3 3 3 3 b . . . 
        . c c b b 1 1 3 3 3 3 3 b b . . 
        c c c 3 1 1 1 3 3 3 3 1 1 b . . 
        c b 3 3 3 3 3 3 3 3 3 1 1 b . . 
        f b b c c c c b b 3 3 1 1 c . . 
        f b c c b d d d d b b 3 3 c c . 
        f b c d d d d d d d b b 3 3 b c 
        . c d d c d d d d d d b b 3 3 c 
        . c d d c d d d c d d b c 3 3 f 
        . f d d d d d c d d d c c c b f 
        . f d b b b b f f d d c c c b f 
        . . c d d b d d b f c c b b f f 
        . . . c d b b d d f c c f f f . 
        . . . . c f b b b b . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . b b b b . . . . 
        . . . . b b b b 3 3 3 3 b . . . 
        . c c b 1 1 3 3 3 3 3 3 b b . . 
        c c c 3 1 1 1 3 3 3 3 3 3 b . . 
        c b 3 3 3 3 3 3 3 3 3 1 1 b . . 
        f b b c c c c b 3 3 3 1 1 c . . 
        f b c c c d d d b b 3 3 3 c c . 
        f b c b d d d d d d b b 3 3 b c 
        . c b d d d d d d d d b c 3 3 c 
        . c d c c d d d d d d c c c 3 f 
        . f d d d d d c c d d c c c b f 
        . f d b b b d d d d d c c c b f 
        . . c d d d d d b f f c b b f f 
        . . f b d d d b b d d f f f f . 
        . . f f f c c b d d d f . . . . 
        `,img`
        . . . . . . . . b b b b . . . . 
        . . . . b b b b 3 3 3 3 b . . . 
        . c c b b 1 1 3 3 3 3 3 b b . . 
        c c 3 3 1 1 3 3 3 3 3 1 1 b . . 
        c b 3 3 3 3 3 3 3 3 3 1 1 b . . 
        f b b c c c 3 3 3 3 3 3 3 c . . 
        f b c c c b b b b 3 3 3 3 3 c . 
        f b c c d d d d d b b 3 3 3 3 c 
        . c c d c d d d d d d b c 3 3 c 
        . c b d c d d d c d d c c c 3 f 
        . f d d d d d c d d d c c c b f 
        . f d b b b d d d d d c c c b f 
        . . c d d d d d d d b c b b f f 
        . . f f d d d d c c b f f f f . 
        . f f b b f f c c b d d b f . . 
        . f b b b f f . . b d d d f . . 
        `],
    100,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenInnerSouthWest, function (sprite, location) {
	
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    Level2()
    mySprite.setPosition(46, 70)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . b b b b . . . . . . . . 
        . . . b 3 3 3 3 b b b b . . . . 
        . . b b 3 3 3 3 3 1 1 b b c c . 
        . . b 1 1 3 3 3 3 3 1 1 3 b c c 
        . . b 1 1 3 3 3 3 3 3 3 3 3 b c 
        . . c 3 3 3 3 3 b c c c c b b f 
        . c 3 3 3 3 b b d d d c c c b f 
        c b 3 3 b b d d d d d d b c b f 
        c 3 3 c b d d d d d d c d b c . 
        f 3 c c c d d c d d d c d d c . 
        f b c c c d d d c d d d d d f . 
        f b c c c f f b d d b b b d f . 
        f f b b f b d d b d d d d c . . 
        . f f f f d d b b d d d c . . . 
        . . . . b b b b f b b f f . . . 
        . . . . . . . f f b b b f . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . b b b b . . . . . . . . 
        . . . b 3 3 3 3 b b b b . . . . 
        . . b b 3 3 3 3 3 1 1 b b c c . 
        . . b 1 1 3 3 3 3 1 1 1 3 c c c 
        . . b 1 1 3 3 3 3 3 3 3 3 3 b c 
        . . c 1 1 3 3 b b c c c c b b f 
        . c c 3 3 b b d d d d b c c b f 
        c b 3 3 b b d d d d d d d c b f 
        c 3 3 b b d d d d d d c d d c . 
        f 3 3 c b d d c d d d c d d c . 
        f b c c c d d d c d d d d d f . 
        f b c c c d d f f b b b b d f . 
        f f b b c c f b d d b d d c . . 
        . f f f c c f d d b b d c . . . 
        . . . . . . b b b b f c . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . b b b b . . . . . . . . 
        . . . b 3 3 3 3 b b b b . . . . 
        . . b b 3 3 3 3 3 3 1 1 b c c . 
        . . b 3 3 3 3 3 3 1 1 1 3 c c c 
        . . b 1 1 3 3 3 3 3 3 3 3 3 b c 
        . . c 1 1 3 3 3 b c c c c b b f 
        . c c 3 3 3 b b d d d c c c b f 
        c b 3 3 b b d d d d d d b c b f 
        c 3 3 c b d d d d d d d d b c . 
        f 3 c c c d d d d d d c c d c . 
        f b c c c d d c c d d d d d f . 
        f b c c c d d d d d b b b d f . 
        f f b b c f f b d d d d d c . . 
        . f f f f d d b b d d d b f . . 
        . . . . f d d d b c c f f f . . 
        `,img`
        . . . . b b b b . . . . . . . . 
        . . . b 3 3 3 3 b b b b . . . . 
        . . b b 3 3 3 3 3 1 1 b b c c . 
        . . b 1 1 3 3 3 3 3 1 1 3 3 c c 
        . . b 1 1 3 3 3 3 3 3 3 3 3 b c 
        . . c 3 3 3 3 3 3 3 c c c b b f 
        . c 3 3 3 3 3 b b b b c c c b f 
        c 3 3 3 3 b b d d d d d c c b f 
        c 3 3 c b d d d d d d c d c c . 
        f 3 c c c d d c d d d c d b c . 
        f b c c c d d d c d d d d d f . 
        f b c c c d d d d d b b b d f . 
        f f b b c b d d d d d d d c . . 
        . f f f f b c c d d d d f f . . 
        . . f b d d b c c f f b b f f . 
        . . f d d d b . . f f b b b f . 
        `],
    100,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    game.over(false)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . b b b b . . . . 
        . . . . b b b b 3 3 3 3 b . . . 
        . c c b b 1 1 3 3 3 3 3 b b . . 
        c c b 3 1 1 3 3 3 3 3 1 1 b . . 
        c b 3 3 3 3 3 3 3 3 3 1 1 b . . 
        f b b c c c c b 3 3 3 3 3 c . . 
        f b c c c d d d b b 3 3 3 3 c . 
        f b c b d d d d d d b b 3 3 b c 
        . c b d c d d d d d d b c 3 3 c 
        . c d d c d d d c d d c c c 3 f 
        . f d d d d d c d d d c c c b f 
        . f d b b b d d b f f c c c b f 
        . . c d d d d b d d b f b b f f 
        . . . c d d d b b d d f f f f . 
        . . . f f b b f b b b b . . . . 
        . . . f b b b f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . b b b b . . . . 
        . . . . b b b b 3 3 3 3 b . . . 
        . c c b b 1 1 3 3 3 3 3 b b . . 
        c c c 3 1 1 1 3 3 3 3 1 1 b . . 
        c b 3 3 3 3 3 3 3 3 3 1 1 b . . 
        f b b c c c c b b 3 3 1 1 c . . 
        f b c c b d d d d b b 3 3 c c . 
        f b c d d d d d d d b b 3 3 b c 
        . c d d c d d d d d d b b 3 3 c 
        . c d d c d d d c d d b c 3 3 f 
        . f d d d d d c d d d c c c b f 
        . f d b b b b f f d d c c c b f 
        . . c d d b d d b f c c b b f f 
        . . . c d b b d d f c c f f f . 
        . . . . c f b b b b . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . b b b b . . . . 
        . . . . b b b b 3 3 3 3 b . . . 
        . c c b 1 1 3 3 3 3 3 3 b b . . 
        c c c 3 1 1 1 3 3 3 3 3 3 b . . 
        c b 3 3 3 3 3 3 3 3 3 1 1 b . . 
        f b b c c c c b 3 3 3 1 1 c . . 
        f b c c c d d d b b 3 3 3 c c . 
        f b c b d d d d d d b b 3 3 b c 
        . c b d d d d d d d d b c 3 3 c 
        . c d c c d d d d d d c c c 3 f 
        . f d d d d d c c d d c c c b f 
        . f d b b b d d d d d c c c b f 
        . . c d d d d d b f f c b b f f 
        . . f b d d d b b d d f f f f . 
        . . f f f c c b d d d f . . . . 
        `,img`
        . . . . . . . . b b b b . . . . 
        . . . . b b b b 3 3 3 3 b . . . 
        . c c b b 1 1 3 3 3 3 3 b b . . 
        c c 3 3 1 1 3 3 3 3 3 1 1 b . . 
        c b 3 3 3 3 3 3 3 3 3 1 1 b . . 
        f b b c c c 3 3 3 3 3 3 3 c . . 
        f b c c c b b b b 3 3 3 3 3 c . 
        f b c c d d d d d b b 3 3 3 3 c 
        . c c d c d d d d d d b c 3 3 c 
        . c b d c d d d c d d c c c 3 f 
        . f d d d d d c d d d c c c b f 
        . f d b b b d d d d d c c c b f 
        . . c d d d d d d d b c b b f f 
        . . f f d d d d c c b f f f f . 
        . f f b b f f c c b d d b f . . 
        . f b b b f f . . b d d d f . . 
        `],
    100,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileDarkGrass2, function (sprite, location) {
	
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestOpen, function (sprite, location) {
    Level3()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
let myenemy1: Sprite = null
let myEnemy: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . b b b b . . . . 
    . . . . b b b b 3 3 3 3 b . . . 
    . c c b b 1 1 3 3 3 3 3 b b . . 
    c c 3 3 1 1 3 3 3 3 3 1 1 b . . 
    c b 3 3 3 3 3 3 3 3 3 1 1 b . . 
    f b b c c c 3 3 3 3 3 3 3 c . . 
    f b c c c b b b b 3 3 3 3 3 c . 
    f b c c d d d d d b b 3 3 3 3 c 
    . c c d c d d d d d d b c 3 3 c 
    . c b d c d d d c d d c c c 3 f 
    . f d d d d d c d d d c c c b f 
    . f d b b b d d d d d c c c b f 
    . . c d d d d d d d b c b b f f 
    . . f f d d d d c c b f f f f . 
    . f f b b f f c c b d d b f . . 
    . f b b b f f . . b d d d f . . 
    `, SpriteKind.Player)
mySprite.ay = 500
tiles.setTilemap(tilemap`level10`)
scene.setBackgroundImage(img`
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7776677777777767777777777777777777777777777667777777776777777777777777777777777777766777777777677777777777777777777777777776677777777767777777777777777777777777
    7666777777777667777777777777777777777767766677777777766777777777777777777777776776667777777776677777777777777777777777677666777777777667777777777777777777777767
    7767766777667766777766777777777777777766776776677766776677776677777777777777776677677667776677667777667777777777777777667767766777667766777766777777777777777766
    6666667767766766776766777777777777776676666666776776676677676677777777777777667666666677677667667767667777777777777766766666667767766766776766777777777777776676
    6666677766766666766667777777777777666677666667776676666676666777777777777766667766666777667666667666677777777777776666776666677766766666766667777777777777666677
    6666676666666676666677767777776667776667666667666666667666667776777777666777666766666766666666766666777677777766677766676666676666666676666677767777776667776667
    6666666666666776677666667766677766777666666666666666677667766666776667776677766666666666666667766776666677666777667776666666666666666776677666667766677766777666
    6666666666666766667766677677667766666666666666666666676666776667767766776666666666666666666667666677666776776677666666666666666666666766667766677677667766666666
    66b666666666666666666667667776676666666666b666666666666666666667667776676666666666b666666666666666666667667776676666666666b6666666666666666666676677766766666666
    66b6666666666666666666666b6776666666666666b6666666666666666666666b6776666666666666b6666666666666666666666b6776666666666666b6666666666666666666666b67766666666666
    66b6666666666666666666666bb676666666666666b6666666666666666666666bb676666666666666b6666666666666666666666bb676666666666666b6666666666666666666666bb6766666666666
    66b66666666bb666666666666bbb66666666666666b66666666bb666666666666bbb66666666666666b66666666bb666666666666bbb66666666666666b66666666bb666666666666bbb666666666666
    66b66666666dbb666666dd6666bb66666666666666b666666666bb666666666666bb66666666666666b666666666bb666666666666bb66666666666666b666666666bb666666666666bb666666666666
    6bb6669666666bbb66666d6666bb6666666666666bb6669666666bbb6666666666bb6666666666666bb6669666666bbb69666d6666bb6666666666666bb6669666666bbb66666d6666bb666666666666
    6bb666d66666d6bbb6666d6666bbb666666666666bb666d66666d6bbb666666666bbb666666666666bb666d66666d6bbb9966d6666bbb666666666666bb666d66666d6bbb6666d6666bbb66666666666
    6bb66dd6666d666bb66ddd66666bb666666666666bb66dd6666d666bb6666666666bb666666666666bb66dd6666d666bb99ddd66666bb666666666666bb66dd6666d666bb66ddd66666bb66666666666
    bbb666d6666d666bb66dd66666dbbb6666666666bbb666d6666d666bb666666666dbbb6666666666bbb666d6666d666bb99dd66666dbbb6666666666bbb666d6666d666bb66dd66666dbbb6666666666
    bbbdd6d6666d666bbb6dd666666bbb6666666666bbbdd6d6666d666bbb666666666bbb6666666666bbbdd6d6666d666bbb9dd666666bbb6666666666bbbdd6d6666d666bbb6dd666666bbb6666666666
    bbb6ddd6666d6666bb6dd666666bbb6666666666bbb6ddd6666d6666bb6666666d6bbb6666666666bbb6ddd6666d6666bb9dd6666d6bbb6666666666bbb6ddd6666d6666bb6dd6666d6bbb6666666666
    bbb6ddd666d66666bbbdd666666bbb6666666666bbb6ddd666d66666bbb666666d6bbb6666666666bbb6ddd666d66666bbbdd6666d6bbb6666666666bbb6ddd666d66666bbbdd6666d6bbb6666666666
    bbbdddd666d666666bbdd666666bbbb6666d6666bbbdddd666d666666bb666666d6bbbb6666d6666bbbdddd666d666666bbdd6666d6bbbb6666d6666bbbdddd666d666666bbdd6666d6bbbb6666d6666
    bb6dddd66dd6666666bb6666666bbbb6666d6666bb6dddd66dd6666666bb6666dd6bbbb6666d6666bb6dddd66dd6666666bb6666dd6bbbb6666d6666bb6dddd66dd6666666bb6666dd6bbbb6666d6666
    bb66ddddd666666666bbb6666666bbb6666d6666bb66ddddd666666666bbb666d666bbb6666d6666bb66ddddd666666666bbb666d666bbb6666d6666bb66ddddd666666666bbb666d666bbb6666d6666
    bb66dddd6666666666dbbbb66666bbb6666d666bbb66dddd6666666666dbbbbdd666bbb6666d666bbb66dddd6666666666dbbbbdd666bbb6666d666bbb66dddd6666666666dbbbbdd666bbb6666d666b
    bb66ddd66666666666ddbbbb6666bbbb666d666bbb66ddd66666666666ddbbbb6666bbbb666d666bbb66ddd66666666666ddbbbb6666bbbb666d666bbb66ddd66666666666ddbbbb6666bbbb666d666b
    bb66ddd66666666666ddbbbbbb66bbbb666d666bbb66ddd66666666666ddbbbbbb66bbbb666d666bbb66ddd66666666666ddbbbbbb66bbbb666d666bbb66ddd66666666666ddbbbbbb66bbbb666d666b
    b6666dd6666666666ddddbbbbbbbbbbbb666d66bb6666dd6666666666ddddbbbbbbbbbbbb666d66bb6666dd6666666666ddddbbbbbbbbbbbb666d66bb6666dd6666666666ddddbbbbbbbbbbbb666d66b
    b6666ddd666666666dd66666bbbbbbbbb666d66bb6666ddd666666666dd66666bbbbbbbbb666d66bb6666ddd666666666dd66666bbbbbbbbb666d66bb6666ddd666666666dd66666bbbbbbbbb666d66b
    b6666dddd66666666dd666666bbbbbbbb666d6bbb6666dddd66666666dd666666bbbbbbbb666d6bbb6666dddd66666666dd666666bbbbbbbb666d6bbb6666dddd66666666dd666666bbbbbbbb666d6bb
    b6666ddddd666666ddd6666666bbbbbbb666dbbbb6666ddddd666666ddd6666666bbbbbbb666dbbbb6666ddddd666666ddd6666666bbbbbbb666dbbbb6666ddddd666666ddd6666666bbbbbbb666dbbb
    dd66666ddddd6666ddd666666666bbbbb666bbbbdd66666ddddd6666ddd666666666bbbbb666bbbbdd66666ddddd6666ddd666666666bbbbb666bbbbdd66666ddddd6666ddd666666666bbbbb666bbbb
    6d66666ddddddd6ddd6666666666bbbbb66bbbb66d66666ddddddd6ddd6666666666bbbbb66bbbb66d66666ddddddd6ddd6666666666bbbbb66bbbb66d66666ddddddd6ddd6666666666bbbbb66bbbb6
    6d666666dddddddddd6666666666bbbbb66bbb666d666666dddddddddd6666666666bbbbb66bbb666d666666dddddddddd6666666666bbbbb66bbb666d666666dddddddddd6666666666bbbbb66bbb66
    6d666666ddddddddd66666666666bbbbb66bb6666d666666ddddddddd66666666666bbbbb66bb6666d666666ddddddddd66666666666bbbbb66bb6666d666666ddddddddd66666666666bbbbb66bb666
    6dd66666ddddddd6666666666666bbbbb66bbd666dd66666ddddddd6666666666666bbbbb66bbd666dd66666ddddddd6666666666666bbbbb66bbd666dd66666ddddddd6666666666666bbbbb66bbd66
    66dd6666dddddd66666666666666bbbbb66bbd6666dd6666dddddd66666666666666bbbbb66bbd6666dd6666dddddd66666666666666bbbbb66bbd6666dd6666dddddd66666666666666bbbbb66bbd66
    66ddd666dddddd66666666666666bbbbb6bbbdd666ddd666dddddd66666666666666bbbbb6bbbdd666ddd666dddddd66666666666666bbbbb6bbbdd666ddd666dddddd66666666666666bbbbb6bbbdd6
    6666dddddddddd6666666666666bbbbbb6bbb6d66666dddddddddd6666666666666bbbbbb6bbb6d66666dddddddddd6666666666666bbbbbb6bbb6d66666dddddddddd6666666666666bbbbbb6bbb6d6
    6666dddddddddd6666666666666bbbbbbbbb66d66666dddddddddd6666666666666bbbbbbbbb66d66666dddddddddd6666666666666bbbbbbbbb66d66666dddddddddd6666666666666bbbbbbbbb66d6
    666666dddddddd6666666666666bbbbbbbbb66dd666666dddddddd6666666666666bbbbbbbbb66dd666666dddddddd6666666666666bbbbbbbbb66dd666666dddddddd6666666666666bbbbbbbbb66dd
    d6666666dddddd666666666666bbbbbbbbb6666dd6666666dddddd666666666666bbbbbbbbb6666dd6666666dddddd666666666666bbbbbbbbb6666dd6666666dddddd666666666666bbbbbbbbb6666d
    dd6666666ddddd666666666666bbbbbbbbb66666dd6666666ddddd666666666666bbbbbbbbb66666dd6666666ddddd666666666666bbbbbbbbb66666dd6666666ddddd666666666666bbbbbbbbb66666
    dd6666666ddddd666666666666bbbbbbbb666666dd6666666ddddd666666666666bbbbbbbb666666dd6666666ddddd666666666666bbbbbbbb666666dd6666666ddddd666666666666bbbbbbbb666666
    9d6666666ddddd66666666666bbbbbbbbb6666666d6666666ddddd66666666666bbbbbbbbb6666666d6666666ddddd66666666666bbbbbbbbb6666666d6666666ddddd66666666666bbbbbbbbb666666
    9d6666666ddddd66666666666bbbbbbbbb6666666d6666666ddddd66666666666bbbbbbbbb6666666d6666666ddddd66666666666bbbbbbbbb6666666d6666666ddddd66666666666bbbbbbbbb666666
    9d6666666ddddd66666666666bbbbbbbbb6666666d6666666ddddd66666666666bbbbbbbbb6666666d6666666ddddd66666666666bbbbbbbbb6666666d6666666ddddd66666666666bbbbbbbbb666666
    9d6666666ddddd66666666666bbbbbbbbb6666666d6666666ddddd66666666666bbbbbbbbb6666666d6666666ddddd66666666666bbbbbbbbb6666666d6666666ddddd66666666666bbbbbbbbb666666
    9dd666666ddddd66666666666bbbbbbbb66666666dd666666ddddd66666666666bbbbbbbb66666666dd666666ddddd66666666666bbbbbbbb66666666dd666666ddddd66666666666bbbbbbbb6666666
    9dd666666ddddd66666666666bbbbbbbb66666666dd666666ddddd66666666666bbbbbbbb66666666dd666666ddddd66666666666bbbbbbbb66666666dd666666ddddd66666666666bbbbbbbb6666666
    ddd666666ddddd66666666666bbbbbbbb6666666ddd666666ddddd66666666666bbbbbbbb6666666ddd666666ddddd66666666666bbbbbbbb6666666ddd666666ddddd66666666666bbbbbbbb6666666
    dd6666666ddddd66666666666bbbbbbbb6666666dd6666666ddddd66666666666bbbbbbbb6666666dd6666666ddddd66666666666bbbbbbbb6666666dd6666666ddddd66666666666bbbbbbbb6666666
    dd6666666dddddd6666666666bbbbbbbb6666666dd6666666dddddd6666666666bbbbbbbb6666666dd6666666dddddd6666666666bbbbbbbb6666666dd6666666dddddd6666666666bbbbbbbb6666666
    dd6666666dddddd6666666666bbbbbbbb6666666dd6666666dddddd6666666666bbbbbbbb6666666dd6666666dddddd6666666666bbbbbbbb6666666dd6666666dddddd6666666666bbbbbbbb6666666
    dd6666666dddddd6666666666bbbbbbb66666666dd6666666dddddd6666666666bbbbbbb66666666dd6666666dddddd6666666666bbbbbbb66666666dd6666666dddddd6666666666bbbbbbb66666666
    d66666666dddddd6666666666bbbbbbb6666666dd66666666dddddd6666666666bbbbbbb6666666dd66666666dddddd6666666666bbbbbbb6666666dd66666666dddddd6666666666bbbbbbb6666666d
    d66666666dddddd6666666666bbbbbbb666666ddd66666666dddddd6666666666bbbbbbb666666ddd66666666dddddd6666666666bbbbbbb666666ddd66666666dddddd6666666666bbbbbbb666666dd
    d66666666dddddd6666666666bbbbbbb666666ddd66666666dddddd6666666666bbbbbbb666666ddd66666666dddddd6666666666bbbbbbb666666ddd66666666dddddd6666666666bbbbbbb666666dd
    666666666ddddddd666666666bbbbbbb66666ddd666666666ddddddd666666666bbbbbbb66666ddd666666666ddddddd666666666bbbbbbb66666ddd666666666ddddddd666666666bbbbbbb66666ddd
    666666666ddddddd666666666bbbbbbb66666ddd666666666ddddddd666666666bbbbbbb66666ddd666666666ddddddd666666666bbbbbbb66666ddd666666666ddddddd666666666bbbbbbb66666ddd
    666666666ddddddd666666666bbbbbbb66666ddd666666666ddddddd666666666bbbbbbb66666ddd666666666ddddddd666666666bbbbbbb66666ddd666666666ddddddd666666666bbbbbbb66666ddd
    666666666dddddddd66666666bbbbbbb6666dddd666666666dddddddd66666666bbbbbbb6666dddd666666666dddddddd66666666bbbbbbb6666dddd666666666dddddddd66666666bbbbbbb6666dddd
    666666666dddddddd66666666bbbbbbb6666dddd666666666dddddddd66666666bbbbbbb6666dddd666666666dddddddd66666666bbbbbbb6666dddd666666666dddddddd66666666bbbbbbb6666dddd
    666666666dddddddd66666666bbbbbbb6666ddd6666666666dddddddd66666666bbbbbbb6666ddd6666666666dddddddd66666666bbbbbbb6666ddd6666666666dddddddd66666666bbbbbbb6666ddd9
    6666666666dddddddd666666bbbbbbbb6666ddd66666666666dddddddd666666bbbbbbbb6666ddd66666666666dddddddd666666bbbbbbbb6666ddd66666666666dddddddd666666bbbbbbbb6666ddd9
    d666666666dddddddd666666bbbbbbbbddddddddd666666666dddddddd666666bbbbbbbbddddddddd666666666dddddddd666666bbbbbbbbddddddddd666666666dddddddd666666bbbbbbbbdddddddd
    ddddd66666dddddddd666666bbbbbbbbbdddddddddddd66666dddddddd666666bbbbbbbbbdddddddddddd66666dddddddd666666bbbbbbbbbdddddddddddd66666dddddddd666666bbbbbbbbbddddddd
    dddddddd66ddddddddd666ddbbbbbbbbbddddddddddddddd66ddddddddd666ddbbbbbbbbbddddddddddddddd66ddddddddd666ddbbbbbbbbbddddddddddddddd66ddddddddd666ddbbbbbbbbbddddddd
    ddddddddddddddddddd6ddddbbbbbbbbbdddddddddddddddddddddddddd6ddddbbbbbbbbbdddddddddddddddddddddddddd6ddddbbbbbbbbbdddddddddddddddddddddddddd6ddddbbbbbbbbbddddddd
    ddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbdddddd
    ddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbdddddd
    dddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddd
    dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
    dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
    dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
    dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
    ddddddddddddddddddd7777777777bbbbbbdddddddddddddddddddddddd7777777777bbbbbbdddddddddddddddddddddddd7777777777bbbbbbdddddddddddddddddddddddd7777777777bbbbbbddddd
    dddddddddddddd77777777777777777777bddddddddddddddddddd77777777777777777777bddddddddddddddddddd77777777777777777777bddddddddddddddddddd77777777777777777777bddddd
    ddddddddddd7777777777777777777777777ddddddddddddddd7777777777777777777777777ddddddddddddddd7777777777777777777777777ddddddddddddddd7777777777777777777777777dddd
    dddddddd777777777777777777777777777777dddddddddd777777777777777777777777777777dddddddddd777777777777777777777777777777dddddddddd777777777777777777777777777777dd
    ddddd77777777777777777777777777777777777ddddd77777777777777777777777777777777777ddddd77777777777777777777777777777777777ddddd77777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    `)
info.setLife(3)
mySprite.setPosition(46, 70)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
