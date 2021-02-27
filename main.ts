controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f . . . . . . . . 
        . . . . f 5 5 5 f . . . . . . . 
        . . . . f 5 5 5 5 f . . . . . . 
        . . . . f 5 5 5 f . . . . . . . 
        . . . . f f f f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, spaceplane, 200, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 500)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
})
let BAD_GUYS: Sprite = null
let projectile: Sprite = null
let spaceplane: Sprite = null
spaceplane = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . f f f f f f f f . . . . . . 
    . . f 5 2 9 9 9 9 9 f . . . . . 
    . f f 2 5 9 9 9 9 9 9 f . . . . 
    f 4 2 2 2 2 9 9 9 9 9 9 f f f f 
    5 4 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
    f 4 f 2 5 5 5 5 5 2 2 2 2 2 2 f 
    . f f f 2 2 2 2 2 2 2 2 2 2 2 f 
    . . . . f f f f f f f f f f f . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(spaceplane, 200, 200)
spaceplane.setStayInScreen(true)
info.setLife(3)
game.onUpdateInterval(1000, function () {
    BAD_GUYS = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . f 9 9 6 6 6 f . . . . 
        . . . f f f 9 9 6 6 6 f f . . . 
        . . f 8 8 8 8 8 8 8 8 8 8 f . . 
        . . . f 8 8 8 8 8 8 8 8 f . . . 
        . . . . f 8 8 8 8 8 8 f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    BAD_GUYS.setVelocity(-100, 0)
    BAD_GUYS.setPosition(160, randint(0, 100))
    BAD_GUYS.setFlag(SpriteFlag.AutoDestroy, true)
})
