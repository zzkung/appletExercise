export const comp_id = '10000';
// dev,prod
export const env = 'dev';
export const dev_server = 'local';

export const host_dev = getHost_dev();
export const host_real = 'https://wxapphis.gzfuture.cn';
export const imghost = host_real;
export const imghttp = host_real + '/AppImg/';

export const smt = [];

function getHost_dev() {
  switch (dev_server) {
    case 'local':
      // return 'http://localhost:990';
      return 'https://wxapphis.gzfuture.cn';
    case 'real':
      return 'https://wxapphis.gzfuture.cn';
  }
};
