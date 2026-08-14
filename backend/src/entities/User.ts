const { 
  Entity, 
  PrimaryGeneratedColumn, 
  Column, 
  CreateDateColumn, 
  UpdateDateColumn,
  BeforeInsert,
  BeforeUpdate
} = require('typeorm');
const bcrypt = require('bcryptjs');

const UserRole = {
  ADMIN: 'ADMIN',
  USER: 'USER'
};

class User {
  id;
  email;
  password;
  role;
  fullName;
  active;
  lastLogin;
  createdAt;
  updatedAt;

  async hashPassword() {
    if (this.password) {
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
    }
  }

  async comparePassword(plainPassword) {
    return bcrypt.compare(plainPassword, this.password);
  }
}

// Definir la entidad con decoradores
const UserEntity = Entity('users')(User);

// Aplicar decoradores a las propiedades
PrimaryGeneratedColumn()(UserEntity.prototype, 'id');
Column({ unique: true, length: 100 })(UserEntity.prototype, 'email');
Column({ length: 255 })(UserEntity.prototype, 'password');
Column({ 
  type: 'enum', 
  enum: UserRole, 
  default: UserRole.USER 
})(UserEntity.prototype, 'role');
Column({ name: 'full_name', length: 100 })(UserEntity.prototype, 'fullName');
Column({ default: true })(UserEntity.prototype, 'active');
Column({ 
  name: 'last_login', 
  type: 'timestamp', 
  nullable: true 
})(UserEntity.prototype, 'lastLogin');
CreateDateColumn({ name: 'created_at' })(UserEntity.prototype, 'createdAt');
UpdateDateColumn({ name: 'updated_at' })(UserEntity.prototype, 'updatedAt');

// Aplicar hooks
BeforeInsert()(UserEntity.prototype, 'hashPassword');
BeforeUpdate()(UserEntity.prototype, 'hashPassword');

module.exports = { User: UserEntity, UserRole };