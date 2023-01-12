# Electronics

_Lille Ø_ has an onboard NMEA 2000 bus as well as a TCP/IP network.

## Network

The boat has two networks:

* `Lille Ø`, a 5GHz network for computers and other regular consumers
* `Lille Oe`, a 2.4GHz network for Internet-of-Things devices

Both of these networks are served by the [RUTX11](https://wiki.teltonika-networks.com/view/RUTX11) on-board router.

The RUTX11 also provides the boat's primary Internet uplink via LTE. The device has two SIM slots, one for our German SIM and another for a local data SIM when traveling.

Administrative interface for the router can be found in <https://192.168.1.1/>

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
* [AMEC WideLink B600](https://www.milltechmarine.com/b600) AIS transponder
* Raspberry Pi 4 with [Sailor Hat](https://shop.hatlabs.fi) and [Signal K](https://signalk.org)

### Stern

* [B&G ZG100](https://www.bandg.com/bg/type/instrument-sensors-and-transducers/compass-sensors/gps-antenna-bg-zg100-module-pack/) GPS

## Autopilot

The boat is equipped with a Raymarine ST4000+ tiller pilot.
The fluxgate compass is inside the cabin next to the saloon forward bulkhead.
Autopilot course computer is in the cockpit near the companionway.

The autopilot can be set to steer a compass course or a wind angle.

In addition to the course computer, the autopilot can also be controlled remotely via both Signal K and the [[navigation|Orca app]].

## Remote monitoring

The state of boat systems is continuously logged to multiple online services, and can be remotely monitored via:

* [Victron VRM](https://vrm.victronenergy.com)
* [Saillogger](https://saillogger.com/)

This is handled by the combination of a Victron Cerbo GX system and Signal K.