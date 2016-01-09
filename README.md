#Raspberry PI - Quick how to

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
