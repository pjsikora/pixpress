#About project
This is simple introduction to Raspberry PI 2 GPIO.

on.js - file which will enable 18th GPIO pin
off.js - file which will disable 18th GPIO pin
anim.js - file which will enable simple on/off combination on 18th GPIO pin

server.js - simple server with possibility of enabling/disabling 18th GPIO pin

##Raspberry PI - Quick how to

Turnoff your PI:
sudo shutdown -h now

Copy your SD card image to your HDD:
sudo dd if=/dev/disk7 of=raspberrypi.dmg

Unmount your SD:
diskutil unmountDisk /dev/disk7

Format card:
sudo newfs_msdos -F 16 /dev/disk7

Restore your system:
sudo dd if=~/Desktop/raspberrypi.dmg of=/dev/disk2


##Raspberry PI - SSH connection

In your terminal:

ssh pi@<IP>

Than you will need to input password. Default password is raspberry
