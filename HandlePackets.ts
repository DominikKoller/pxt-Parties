namespace Aodv
{
    /**
     * Register a callback for the radio packets that will be sent.
     *
     * Checks the type of the packet and calls the corresponding
     * function with the data in the packet as arguments.
     */
    // TODO: Fill in the arguments for the other calls
    onDataReceived(() => {
        receivePacket();
        const tp = receivedType();
        switch (tp) {
            case PacketType.RREQ:
                handleRREQ(/* args */);
                break;
            case PacketType.RREP:
                handleRREP(
                    receivedFlags(),
                    receivedPrefixSize(),
                    receivedHopCount(),
                    receivedDestAddress(),
                    receivedDestSeqNum(),
                    receivedOrigAddress(),
                    receivedOrigSeqNum()
                );
                break;
            case PacketType.RERR:
                handleRERR(/* args */);
                break;
            case PacketType.RREP_ACK:
                handleRREP_ACK();
                break;
            default: // unknown packet
                break;
        }
    });

    /**
     * Send the different types of packets for the AODV protocol.
     */
    // TODO: Implement the rest of these
    function sendRREQ(/* args */) {}
    export function sendRREP(flags: number, prefixSize: number, hopCount: number,
                      destAddress: number, destSeqNum: number,
                      origAddress: number, origSeqNum: number): void {
        const buf = pins.createBuffer(20);
        buf.setNumber(NumberFormat.UInt8LE,  0,  PacketType.RREP);
        buf.setNumber(NumberFormat.UInt8LE,  1,  flags);
        buf.setNumber(NumberFormat.UInt8LE,  2,  prefixSize);
        buf.setNumber(NumberFormat.UInt8LE,  3,  hopCount);
        buf.setNumber(NumberFormat.UInt32LE, 4,  destAddress);
        buf.setNumber(NumberFormat.UInt32LE, 8,  destSeqNum);
        buf.setNumber(NumberFormat.UInt32LE, 12, origAddress);
        buf.setNumber(NumberFormat.UInt32LE, 16, origSeqNum);
        sendRawPacket(buf);
    }
    function sendRERR(/* args */) {}
    function sendRREQ_ACK(/* args */) {}

    /**
     * Functions to handle incoming packets.
     *
     * Note: Typescript will treat the 4 byte values as signed integers, so if
     * you need to compare two of these large values then first convert them to 
     * unsigned ints with (value>>>0). The type of this result is actually a
     * floating point value, so may not be exact.
     */
    // TODO: Implement all of these, can be moved into separate files if wanted
    function handleRREQ(/* args */) {}
    function handleRREP(flags: number, prefixSize: number, hopCount: number,
                        destAddress: number, destSeqNum: number,
                        origAddress: number, origSeqNum: number) {}
    function handleRERR(/* args */) {}
    function handleRREP_ACK() {}
}