# 📦 WorkFlow

API RESTful desenvolvida com Node.js para gerenciamento de fluxos de trabalho.

## 🚀 Tecnologias Utilizadas

- Node.js  
- Express  
- MongoDB  
- Mongoose  
- dotenv  

# Infraestrutura com Vagrant
Este projeto utiliza o Vagrant para simular uma infraestrutura de duas máquinas virtuais com VirtualBox.

## 💻 Requisitos

- [VirtualBox](https://www.virtualbox.org/)
- [Vagrant](https://www.vagrantup.com/)

## ⚙️ Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/enzo-gois/WorkFlow.git
   ```
   
2. Acesse o diretório do projeto:
   ```bash
   cd WorkFlow
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Execute a aplicação:
   ```bash
   npm start
   ```

## Rodando nas máquinas virtuais

1. Inicie as máquinas virtuais
   ```bash
      vagrant up
   ```

2. Acesse a vm1
   ```bash
      vagrant ssh vm1
   ```

3. Execute o provisionamento com Ansible:
   ```
      cd /vagrant/ansible
      ansible-playbook -i inventory configura-node.yml
   ```

4. Teste a API a partir da VM1:
   ```
      curl http://192.168.56.20:3000/livros
   ```

## WorkFlow utilizado 
GitLab Flow
