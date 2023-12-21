import useStore from "@/store/store";

export default function useUser() {
  return useStore((s) => s.user);
}
