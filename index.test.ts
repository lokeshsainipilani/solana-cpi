import * as path from "path";
import { Keypair } from "@solana/web3.js";

import { LiteSVM } from "litesvm";
import {deserialize} from "borsh"
import * as borsh from "borsh"
import { count } from "console";
class CounterState {
    count: number

    constructor (count: number) {
        this.count = count;
    }

    static schema: borsh.Schema = {
        struct: {
            count: 'u32'
        }
    }
}

