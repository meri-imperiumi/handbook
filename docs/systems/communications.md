# Communications

## VHF

The vessel has two VHF devices:
* Icom M510 fixed installation DSC-VHF radio
* Icom M49D handheld DSC-VHF

The Icom M510 has a command mic located in the cockpit. In normal operations the speaker on the radio unit is turned off.

Vessel callsign: `DH8613`
Vessel MMSI: `211692440`

## HF

The vessel has an Icom IC-718 HF / SSB radio for long-distance communications.

Port-side backstay is set up as an end-fed antenna with isolators and an AH-4 antenna tuner. KISS-SSB is used as the ground plane.

Computer control of the radio is enabled by a SignaLink USB sound card.

## WiFi

The boat has two networks:

* `Lille Ø`, a 5GHz network for computers and other regular consumers
* `Lille Oe`, a 2.4GHz network for Internet-of-Things devices

Both of these networks are served by the [RUTX11](https://wiki.teltonika-networks.com/view/RUTX11) on-board router.

The RUTX11 also provides the boat's primary Internet uplink via LTE. The device has two SIM slots, one for our German SIM and another for a local data SIM when traveling.

Administrative interface for the router can be found in <https://192.168.2.1/>
### Starlink

The Starlink antenna ("Dishy v2") is mounted on the pushpit with a NOA bracket. The cable runs through the lazarette and starboard storage locker.

The Starlink router needs to be plugged into an AC power socket and the inverter turned on in [Venus OS](http://venus.local).

In a sea state it may take up to 30 minutes for the dishy to acquire an interner connection.
Starlink consumes about 50W of power.

Our RUTX11 is configured to use Starlink for uplink when available, and to use the two LTE SIMs as fallback.

## Meshtastic

The boat carries multiple [Meshtastic](https://meshtastic.org) devices for local telemetry and communications:

* Boat node `lilo` (ID `2697665940`, public key `NWHDXQEnCam7k5/Uqrg5N4upcD7XzypdG7qYVZyFu2s=`)
* Mast repeater `lilm` (ID `2990880859`, public key `QgoqDxKQLEhTKUhvU64dAjRUnNvgQ3OyHFSreSkjEWs=`)
* Crew node `bgie` (ID `3796358305`, public key `XxcXCCopZB00zqDIu/cvhCRJtzRmgQV27YUvPtcbpHw=`)
* Crew node `ihmi` (ID `2683209950`, public key `li23KVwMGyoYaLP5ciiFa3aoAF6C0IoYS23q7fb76jU=`)
* Dinghy tracker `isos` (public key `J1ZQycwWt/qxEe/0NKSOn2tetp8cDfQh/9T3FGhJVjw=`)

The boat node is connected to [signalk-meshtastic](https://github.com/meri-imperiumi/signalk-meshtastic#readme) and transmits vessel telemetry periodically.

## Inreach

Lille Ø is equipped with a Garmin Inreach Mini 2. This device can be used for satellite text messaging, as well as sharing the vessel location when offshore.