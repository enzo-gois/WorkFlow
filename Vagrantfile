Vagrant.configure("2") do |config|

  config.vm.box = "ubuntu/focal64"

  config.vm.define :vm1 do |vm1|
    vm1.vm.network :private_network, ip: "192.168.56.10"
    vm1.vm.provider "virtualbox" do |vb|
      vb.memory = 1024
    end
  end

  config.vm.define :vm2 do |vm2|
    vm2.vm.network :private_network, ip: "192.168.56.20"
    vm2.vm.synced_folder ".", "/home/vagrant/vagrant_data"
    vm2.vm.provider "virtualbox" do |vb|
      vb.memory = 2048
    end

    vm2.vm.provision "shell", inline: <<-SHELL
      curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
      sudo apt-get update
      sudo apt-get install -y nodejs mongodb

      sudo systemctl enable mongodb
      sudo systemctl start mongodb

      cd /home/vagrant/vagrant_data
      npm install
      npm run start &
    SHELL
  end
end
