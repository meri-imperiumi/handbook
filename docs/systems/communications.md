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

### Email over HF radio

* Check local rules for amateur radio usage (maritime mobile uses German rules, coastal uses local rules. [DARC has a convenient list](darc.de/der-club/referate/ausland/funken-im-ausland/cept-laenderliste/) of CEPT visiting rules)
* Turn the _HF SSB_ circuit on
* Turn the radio on
* Connect the USB hub on the navigation table to the MacBook Air
* Ensure that MacBook Air can see the _USB AUDIO CODEC_ sound interface
    * If not, push the button on the KVM inside the table to switch USB from the Raspberry Pi to the MacBook
* Start rig control interface with `rigctld -m 3013 -r /dev/cu.PL2303G-USBtoUART11130 -t 4532 -s 4800 -vvv`
* Start pat interface with `pat http`
* Start _CrossOver_ and launch _Vara HF_ (and/or _Ardop_)
* Open pat at <http://localhost:8080> and establish connection with the _Ready_ button
    * Ensure that the radio actually transmits. You should hear clicking. If not, ensure TX knob is set to high on the SignaLink sound card. [More debug options](https://tigertronics.com/slusbts.htm) on SignaLink website.

Winlink position reports made in pat will also update vessel position on the Lille Ø website. If updates include text, it will end up in the blog stream.
## WiFi

The boat has two networks:

* `Lille Ø`, a 5GHz network for computers and other regular consumers
* `Lille Oe`, a 2.4GHz network for Internet-of-Things devices

Both of these networks are served by the [RUTX11](https://wiki.teltonika-networks.com/view/RUTX11) on-board router.

The RUTX11 also provides the boat's primary Internet uplink via LTE. The device has two SIM slots, one for our German SIM and another for a local data SIM when traveling.

Administrative interface for the router can be found in <https://192.168.2.1/>.

### Restarting WiFi

If the RUTX11 needs to be restarted for whatever reason, all Shelly devices onboard will also need a restart. These are in the _Automatic Lights_ circuit, plus the two Shellies in the _Computer_ circuit. The latter can be switched on and off using the bright blue power toggle under the RUTX11.
## Starlink

The Starlink Mini antenna is mounted on the solar arch with a NOA bracket. The combined power and ethernet cable runs through the lazarette and starboard storage locker.

There is a 12V-to-24V DC-DC converter powering the Starlink inside the electrical cabinet. Starlink is powered using its own circuit.

In a sea state it may take up to 30 minutes for the dishy to acquire an internet connection.
Starlink consumes about 20W of power.

Our RUTX11 is configured to use Starlink for uplink when available, and to use the two LTE SIMs as fallback.
### Ocean data

We use a Global Roam plan with the Starlink, giving unlimited Internet in coastal areas in countries that support it.

For offshore use, we need to enable the metered _Ocean Data_ feature. This is done in the _Account -> Subscription -> Data Usage_ screen of the Starlink app.
### Backup Starlink

There is a second Starlink Mini device in its original packaging in the technical compartment, stored together with a power cable that works from the 12V cigarette lighter socket. This device should be able to get online for 1h after initial start-up to make it possible to enable a plan for it.
## Meshtastic

The boat carries multiple [Meshtastic](https://meshtastic.org) devices for local telemetry and communications:

* Boat node `lilo` (ID `2996810856`, public key `NWHDXQEnCam7k5/Uqrg5N4upcD7XzypdG7qYVZyFu2s=`)
* Crew node `bgie` (ID `3796358305`, public key `XxcXCCopZB00zqDIu/cvhCRJtzRmgQV27YUvPtcbpHw=`)
* Crew node `ihmi` (ID `2683209950`, public key `li23KVwMGyoYaLP5ciiFa3aoAF6C0IoYS23q7fb76jU=`)
* Dinghy tracker `isos` (public key `J1ZQycwWt/qxEe/0NKSOn2tetp8cDfQh/9T3FGhJVjw=`)

The boat node is connected to [signalk-meshtastic](https://github.com/meri-imperiumi/signalk-meshtastic#readme) and transmits vessel telemetry periodically.

## Inreach

Lille Ø is equipped with a Garmin Inreach Mini 2. This device can be used for satellite text messaging, as well as sharing the vessel location when offshore.
