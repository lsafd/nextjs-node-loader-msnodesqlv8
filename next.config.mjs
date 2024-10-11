/** @type {import('next').NextConfig} */
import os from 'os'
const nextConfig = {
        webpack: config => {
        config.module.rules.push({
            test: /\.node$/,
            use: [
                {
                    loader: 'nextjs-node-loader',
                    options: {
                        flags: os.constants.dlopen.RTLD_NOW,
                        outputPath: config.output.path,
                    },
                },
            ],
        })
        return config
    },
}

export default nextConfig;
