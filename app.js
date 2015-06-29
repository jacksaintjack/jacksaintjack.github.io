function Character(options) {
  this.life = 100;
  this.hits = 1;
}

Character.prototype.damage = function() {
  var baseDamage = 5;
  this.life -= this.hits * baseDamage;
  this.isDead();
  this.hits += 2;
};

Character.prototype.endDamage = function() {
  var baseDamage = 100;
  this.life -= this.hits * baseDamage;
  this.isDead();
  this.hits += 1
};

Character.prototype.isDead = function(){
  if(this.life <= 0){
    alert("You Died!");
    $(window).bind('unload', function(){});
  }
};

var mainCharacter = new Character();
