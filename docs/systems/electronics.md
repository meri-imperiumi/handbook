# Electronics

_Lille Ø_ has an onboard NMEA 2000 bus as well as a TCP/IP network.

## Network

The boat has two networks:

* `Lille Ø`, a 5GHz network for computers and other regular consumers
* `Lille Oe`, a 2.4GHz network for Internet-of-Things devices

Both of these networks are served by the [RUTX11](https://wiki.teltonika-networks.com/view/RUTX11) on-board router.

The RUTX11 also provides the boat's primary Internet uplink via LTE. The device has two SIM slots, one for our German SIM and another for a local data SIM when traveling.

Administrative interface for the router can be found in <https://192.168.2.1/>
### Starlink

The Starlink antenna ("Dishy v2") is mounted on the pushpit with a NOA bracket. The cable runs through the lazarette and starboard storage locker.
It is powered with a Yaosheng PoE injector.

Starlink can be controlled using the switch in the electrical panel. In a sea state it may take up to 30 minutes for the dishy to acquire an interner connection.
Starlink consumes about 50W of power.

Our RUTX11 is configured to use Starlink for uplink when available, and use the two LTE SIMs as fallback.
## NMEA 2000

The boat's NMEA 2000 (N2K) backbone runs from bow to the technical compartment. The bus contains the following devices:

### Bow

* [Orca Core](https://getorca.com/orca-core) GPS and gyrocompass
* [Airmar P79](https://www.garmin.com/en-US/p/88672) depth sounder

### Technical compartment

* 2✕ [B&G Triton2](https://www.bandg.com/bg/type/instruments/triton2-digital-display/) instrument displays
* [Yacht Devices YDNR-02](https://www.yachtd.com/products/wifi_router.html) router connecting the following to N2K:
    * [[#Autopilot|Raymarine ST4000+]] autopilot
    * [LCJ Capteurs CV7](https://lcjcapteurs.com/en/categorie-girouette-anemometres-capteur-vent/cruising-sailboats/) ultrasonic wind sensor
    * [Actisense DST-2](https://actisense.com/products/dst-2-nmea-0183-digital-transducer/) digitizer for Sumlog paddle wheel and NASA depth transducer
* [AMEC WideLink B600](https://www.milltechmarine.com/b600) AIS transponder
* Raspberry Pi 4 with [Sailor Hat](https://shop.hatlabs.fi) and [Signal K](https://signalk.org)

### Stern

* [B&G ZG100](https://www.bandg.com/bg/type/instrument-sensors-and-transducers/compass-sensors/gps-antenna-bg-zg100-module-pack/) GPS

### Rebooting NMEA2000

The Triton2 instruments become occasionally unresponsive after running for a longer time (typically multiple weeks). The solution is to restart them. Easiest option is by rebooting the entire N2K bus.

- [ ] Turn *Navigation Instruments* circuit off
- [ ] Wait 10 seconds and turn the circuit back on
- [ ] Raspberry Pi needs to refresh the CAN interface to see NMEA2000 data. Either reboot it, or preferably:
	- [ ] SSH to the RPi `ssh pi@lille-oe-pi.local`
	- [ ] Run `sudo ifdown can0`
	- [ ] Run `sudo ifup can0`

#### Settings for YDNR-02

The YDNR-02 NMEA2000 to SeaTalk interface box sometimes loses its state when NMEA2000 is restarted. If this happens (usually seen by there suddenly being a `YDNR` WiFi hotspot and STW not being sent), here are the steps to set it up:

1. Connect to WiFi and set WiFi client to Lille Oe
2. Enable NMEA Server 2 (port `1457`), direction Both
3. Route only SeaTalk and NMEA0183 ports to send to Server 2
4. Set NMEA port speeds to `4800bps`
5. NMEA settings: generate $STALK sentences
7. Set SeaTalk whitelist to
```
ALK APB S82 S85 S86 S9E SA1 SA2 MWV S10 S11 VTG S53 S52 S99 STA
```

## Autopilot

The boat is equipped with a Raymarine ST4000+ tiller pilot.
The fluxgate compass is inside the cabin next to the saloon forward bulkhead.
Autopilot course computer is in the cockpit near the companionway.

The autopilot can be set to steer a compass course or a wind angle.

In addition to the course computer, the autopilot can also be controlled remotely via Signal K.

## Remote monitoring

The state of boat systems is continuously logged to multiple online services, and can be remotely monitored via:

* [Victron VRM](https://vrm.victronenergy.com)
* [PostgSail](https://iot.openplotter.cloud/monitoring)

This is handled by the combination of a Victron Cerbo GX system and Signal K.