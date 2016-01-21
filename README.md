#About project
This is simple introduction to Raspberry PI 2 GPIO.


## Scripts in folder gpio-test (based only on onoff lib)
on.js - file which will enable 18th GPIO pin
off.js - file which will disable 18th GPIO pin
anim.js - file which will enable simple on/off combination on 18th GPIO pin


## Server
Run server with command
than
```
node index.js
```

## FED
Draft of FED builder

#GPIO section
![GPIO pins image](http://fedojo.com/wp-content/uploads/2016/01/gpiorpi2.png)


#Quick autobuild
If you are rebuilding code or you wish to make changes and need an automatic rebuilder each time you change the code I recommend to use supervisor.
```
sudo install supervisor -g 
```

than
```
supervisor index.js
```


#Raspberry PI basics
This section is covering the basics of Raspberry PI based on Raspbian.

##Raspberry PI - Quick how to
Turnoff your PI:
```
sudo shutdown -h now
```

Copy your SD card image to your HDD:
```
sudo dd if=/dev/disk7 of=raspberrypi.dmg
```

Unmount your SD:
```
diskutil unmountDisk /dev/disk7
```

Format card:
```
sudo newfs_msdos -F 16 /dev/disk7
```

Restore your system:
```
sudo dd if=~/Desktop/raspberrypi.dmg of=/dev/disk2
```


##Raspberry PI - SSH connection
In your terminal:
```
ssh pi@<IP>
```

Than you will need to input password. Default password is:
```
raspberry
```  


#Read more 
raspberry-pi-node-js-and-how-to-start-with-programming-gpio-pixpress-project-on-github
