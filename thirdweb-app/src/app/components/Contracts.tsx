import { Suspense } from 'react';
import { ContractCard } from '~/app/components/ContractCard';
import { ContractSkeleton } from '~/app/components/ContractSkeleton';
import { customContracts, preBuiltContracts } from '~/constants/contracts';

export function Contracts() {
  return (
    <div className="flex flex-col items-center justify-center py-5">
      <p className="mb-5 text-xl font-medium sm:text-2xl">
        Select a contract to interact with
      </p>

      <div className="mb-5 flex w-full flex-col">
        <p className="mb-1 text-left text-xl font-medium">Prebuilt Contracts</p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {preBuiltContracts.map((contract) => (
            <Suspense fallback={<ContractSkeleton />} key={contract.path}>
              <ContractCard contract={contract.contract} href={contract.href} />
            </Suspense>
          ))}
        </div>
      </div>

      <div className="mb-5 flex w-full flex-col">
        <p className="mb-1 text-left text-xl font-medium">Custom Contracts</p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {customContracts.map((contract) => (
            <Suspense fallback={<ContractSkeleton />} key={contract.path}>
              <ContractCard contract={contract.contract} href={contract.href} />
            </Suspense>
          ))}
        </div>
      </div>
    </div>
  );
}