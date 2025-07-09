import {Params} from "next/dist/shared/lib/router/utils/route-matcher";
import {ReadonlyURLSearchParams} from "next/navigation";

export type Tr = (key: string, opts?: any) => string


export interface BaseServerProps {
  params: Params;
  searchParams:  ReadonlyURLSearchParams;
}

export type ServerProps = {
  params: Params;
  searchParams:  ReadonlyURLSearchParams;
};