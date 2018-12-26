import {Sha256 as BrowserSha256} from '@aws-js-sdk-v3-prerelease/crypto-sha256-browser';
import {Hash as NodeHash} from '@aws-js-sdk-v3-prerelease/hash-node';
import {Hash, SourceData} from '@aws-js-sdk-v3-prerelease/types';

export class Sha256 implements Hash {
    private readonly hash: Hash;

    constructor(secret?: SourceData) {
        if (supportsCryptoModule()) {
            this.hash = new NodeHash('sha256', secret);
        } else {
            this.hash = new BrowserSha256(secret);
        }
    }

    update(data: SourceData, encoding?: 'utf8' | 'ascii' | 'latin1'): void {
        this.hash.update(data, encoding);
    }

    digest(): Promise<Uint8Array> {
        return this.hash.digest();
    }
}

function supportsCryptoModule(): boolean {
    try {
        require('crypto');
        return true;
    } catch {
        return false;
    }
}
